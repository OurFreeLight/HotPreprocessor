import { HotPreprocessor, HotStartOptions, IHotPreprocessor, HotSite } from "./HotPreprocessor";
import { Hot, DeveloperMode } from "./Hot";
import { HotComponent, IHotComponent } from "./HotComponent";
import { HotAPI, EventExecutionType } from "./HotAPI";
import { HotFile } from "./HotFile";
import { HotLog, HotLogLevel } from "./HotLog";
import { HotPage } from "./HotPage";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, HTTPMethod, ServerAuthorizationFunction, ServerExecutionFunction } from "./HotRouteMethod";
import { HotServer } from "./HotServer";
import { HotHTTPServer } from "./HotHTTPServer";
import { HotClient } from "./HotClient";
import { HotDB, ConnectionStatus } from "./HotDB";
import { HotTester } from "./HotTester";
import { HotTesterAPI } from "./HotTesterAPI";
import { IHotTestElement, HotTestElement } from "./HotTestElement";
import { HotTestDriver } from "./HotTestDriver";

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
		HotStartOptions, 
		IHotPreprocessor,
		HotSite,
		Hot,
		DeveloperMode,
		HotComponent,
		IHotComponent,
		HotAPI,
		EventExecutionType,
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
		HotTester,
		HotTesterAPI,
		HotTestElement,
		IHotTestElement,
		HotTestDriver,
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