import { HotPreprocessor } from "../../HotPreprocessor";

/**
 * The resulting data from a generated field.
 */
export interface MySQLSchemaFieldResult
{
	/**
	 * The field to be entered.
	 */
	field?: string;
	/**
	 * The primary key to be added.
	 */
	primaryKey?: string;
	/**
	 * The key to be added.
	 */
	key?: string;
	/**
	 * The constraint to be added.
	 */
	constraint?: string;
	/**
	 * The foreign key to be added.
	 */
	foreignKey?: string;
}

/**
 * The database field.
 */
export class MySQLSchemaField
{
	/**
	 * The name of the field.
	 */
	name: string;
	/**
	 * The data type, be sure to include the length of the 
	 * data type here as well.
	 */
	dataType: string;
	/**
	 * Set as a primary key.
	 */
	primaryKey: boolean;
	/**
	 * Set as a not null.
	 */
	notNull: boolean;
	/**
	 * Set as a unique index.
	 */
	uniqueIndex: boolean;
	/**
	 * Set as a binary column.
	 */
	binaryColumn: boolean;
	/**
	 * Set as an unsigned data type.
	 */
	unsignedDataType: boolean;
	/**
	 * If this column is a number, fill with zeroes.
	 */
	fillZeroes: boolean;
	/**
	 * Set as an auto incrementing column.
	 */
	autoIncrement: boolean;
	/**
	 * Set as a generated column.
	 */
	generatedColumn: boolean;
	/**
	 * Set the default value.
	 */
	defaultValue: string;

	constructor (name: string = "", dataType: string = "", defaultValue: string = "", 
		primaryKey: boolean = false, notNull: boolean = true, uniqueIndex: boolean = false, 
		binaryColumn: boolean = false, unsignedDataType: boolean = false, 
		fillZeroes: boolean = false, autoIncrement: boolean = false, 
		generatedColumn: boolean = false)
	{
		this.name = name;
		this.dataType = dataType;
		this.primaryKey = primaryKey;
		this.notNull = notNull;
		this.uniqueIndex = uniqueIndex;
		this.binaryColumn = binaryColumn;
		this.unsignedDataType = unsignedDataType;
		this.fillZeroes = fillZeroes;
		this.autoIncrement = autoIncrement;
		this.generatedColumn = generatedColumn;
		this.defaultValue = defaultValue;
	}

	/**
	 * Compare two different fields.
	 * 
	 * @param field1 The first field to compare.
	 * @param field2 The second field to compare.
	 * @param onlyKeys Only compare using the provided keys. If set to null, this will compare 
	 * using all of the keys in these objects.
	 * @param caseInsensitive If set to true, all detected string values will be compared as 
	 * case insensitive.
	 */
	static compare (field1: MySQLSchemaField, field2: MySQLSchemaField, 
		onlyKeys: string[] = null, caseInsensitive: boolean = true): boolean
	{
		if (onlyKeys == null)
		{
			onlyKeys = ["name", "dataType", "primaryKey", "notNull", 
				"uniqueIndex", "binaryColumn", "unsignedDataType", 
				"fillZeroes", "autoIncrement", "generatedColumn", 
				"defaultValue"];
		}

		for (let iIdx = 0; iIdx < onlyKeys.length; iIdx++)
		{
			let key: string = onlyKeys[iIdx];
			// @ts-ignore
			let field1Value = field1[key];
			// @ts-ignore
			let field2Value = field2[key];

			if (typeof (field1Value) === "string")
			{
				field1Value = field1Value.toLowerCase ();
				field2Value = field2Value.toLowerCase ();
			}

			if (field1Value !== field2Value)
				return (false);
		}

		return (true);
	}

	/**
	 * Parse a JSON object and get a MySQLSchemaField object from it.
	 * Warning! This is only partially implemented. This will not check 
	 * the following fields:
	 * * Binary column
	 * * unique
	 * * zero-filled
	 * * generated column
	 */
	static parse (json: any): MySQLSchemaField
	{
		let result: MySQLSchemaField = new MySQLSchemaField ();

		if (json["name"] != null)
			result.name = json["name"];

		if (json["Name"] != null)
			result.name = json["Name"];

		if (json["field"] != null)
			result.name = json["field"];

		if (json["Field"] != null)
			result.name = json["Field"];

		if (json["Type"] != null)
		{
			result.dataType = json["Type"];
			const pos: number = result.dataType.indexOf ("unsigned");

			if (pos > -1)
			{
				result.dataType = result.dataType.substr (0, (pos - 1));
				result.unsignedDataType = true;
			}
		}

		if (json["Null"] != null)
			result.notNull = !HotPreprocessor.parseBoolean (json["Null"]);

		if (json["Key"] != null)
		{
			let keyType: string = json["Key"];

			keyType = keyType.toLowerCase ();

			if (keyType === "pri")
				result.primaryKey = true;
		}

		if (json["Extra"] != null)
		{
			let extraValue: string = json["Extra"];

			extraValue = extraValue.toLowerCase ();

			if (extraValue === "auto_increment")
				result.autoIncrement = true;
		}

		if (json["Default"] != null)
			result.defaultValue = json["Default"];

		return (result);
	}

	/**
	 * Generate the db command.
	 */
	async generate (): Promise<MySQLSchemaFieldResult>
	{
		let result: MySQLSchemaFieldResult = {
				"field": "",
				"constraint": "",
				"foreignKey": "",
				"primaryKey": "",
				"key": ""
			};

		let additionalStr: string = "";
		let defaultValue: string = this.defaultValue;

		if (this.unsignedDataType === true)
			additionalStr += "unsigned ";

		if (this.notNull === true)
		{
			additionalStr += "NOT NULL ";

			if (defaultValue !== "")
				defaultValue = `'${defaultValue}'`;
		}
		else
		{
			if (defaultValue === "")
				defaultValue = "NULL";
			else
				defaultValue = `'${defaultValue}'`;
		}

		if (this.autoIncrement === true)
			additionalStr += "AUTO_INCREMENT ";

		if (defaultValue !== "")
			additionalStr += `DEFAULT ${defaultValue}`;

		result.field = `\`${this.name}\` ${this.dataType} ${additionalStr}`;

		if (this.primaryKey === true)
			result.primaryKey = `${this.name}`;

		if (this.uniqueIndex === true)
			result.key = `UNIQUE KEY \`${this.name}_UNIQUE\` (\`${this.name}\`)`;

		return (result);
	}
}