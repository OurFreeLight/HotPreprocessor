import { HotPreprocessor, HotSite } from "./HotPreprocessor";
import { Hot, DeveloperMode } from "./Hot";
import { HotComponent, IHotComponent } from "./HotComponent";
import { HotAPI } from "./HotAPI";
import { HotFile } from "./HotFile";
import { HotLog, HotLogLevel } from "./HotLog";
import { HotPage } from "./HotPage";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, HTTPMethod, ServerAuthorizationFunction, ServerExecutionFunction } from "./HotRouteMethod";
import { HotServer } from "./HotServer";
import { HotHTTPServer } from "./HotHTTPServer";
import { HotClient } from "./HotClient";
import { HotDB, ConnectionStatus } from "./HotDB";
import { IHotTestElement, HotTestElement } from "./HotTestElement";

// Database stuff
import { HotDBConnectionInterface } from "./HotDBConnectionInterface";
import { HotDBGenerationType, HotDBSchema } from "./schemas/HotDBSchema";

// MySQL specific database stuff
import { HotDBMySQL, MySQLResults } from "./schemas/HotDBMySQL";
import { MySQLSchema } from "./schemas/mysql/MySQLSchema";
import { MySQLSchemaFieldResult, MySQLSchemaField } from "./schemas/mysql/MySQLSchemaField";
import { MySQLSchemaTable } from "./schemas/mysql/MySQLSchemaTable";

HotPreprocessor.isWeb = false;

export {
		HotPreprocessor,
		HotSite,
		Hot,
		DeveloperMode,
		HotComponent,
		IHotComponent,
		HotAPI,
		HotFile,
		HotLog,
		HotLogLevel,
		HotPage,
		HotDB,
		ConnectionStatus,
		HotRoute,
		HotRouteMethod,
		HTTPMethod,
		ServerAuthorizationFunction,
		ServerExecutionFunction,
		HotServer,
		HotHTTPServer,
		HotClient,
		HotTestElement,
		IHotTestElement,
		HotDBGenerationType,
		HotDBConnectionInterface,
		HotDBSchema,
		HotDBMySQL,
		MySQLResults,
		MySQLSchema,
		MySQLSchemaFieldResult,
		MySQLSchemaField,
		MySQLSchemaTable
	};