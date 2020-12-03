import { HotPreprocessor, IHotPreprocessor, HotStartOptions, HotSite } from "./HotPreprocessor";
import { Hot, DeveloperMode } from "./Hot";
import { HotComponent, IHotComponent } from "./HotComponent";
import { HotAPI, EventExecutionType } from "./HotAPI";
import { HotFile } from "./HotFile";
import { HotLog } from "./HotLog";
import { HotPage } from "./HotPage";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, HTTPMethod, ServerAuthorizationFunction, ServerExecutionFunction } from "./HotRouteMethod";
import { HotServer } from "./HotServer";
import { HotClient } from "./HotClient";
import { HotTester } from "./HotTester";
import { HotTesterAPI } from "./HotTesterAPI";
import { IHotTestElement, HotTestElement } from "./HotTestElement";
import { HotTestDriver } from "./HotTestDriver";

HotPreprocessor.isWeb = true;

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
		HotPage,
		HotRoute,
		HotRouteMethod,
		HTTPMethod,
		ServerAuthorizationFunction,
		ServerExecutionFunction,
		HotServer,
		HotClient,
		HotTester,
		HotTesterAPI,
		HotTestElement,
		IHotTestElement,
		HotTestDriver
	};