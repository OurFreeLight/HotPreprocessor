/**
 * The resulting data from a generated field.
 */
export interface MySQLSchemaFieldResult
{
	/**
	 * The field to be entered.
	 */
	field: string;
	/**
	 * The primary key to be added.
	 */
	primaryKey: string;
	/**
	 * The key to be added.
	 */
	key: string;
	/**
	 * The constraint to be added.
	 */
	constraint: string;
	/**
	 * The foreign key to be added.
	 */
	foreignKey: string;
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

	constructor (name: string = "", dataType: string = "")
	{
		this.name = name;
		this.dataType = dataType;
		this.primaryKey = false;
		this.notNull = true;
		this.uniqueIndex = false;
		this.binaryColumn = false;
		this.unsignedDataType = false;
		this.fillZeroes = false;
		this.autoIncrement = false;
		this.generatedColumn = false;
		this.defaultValue = "";
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