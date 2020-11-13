import { HotPreprocessor, HotSite } from "./HotPreprocessor";
import { Hot, DeveloperMode } from "./Hot";
import { HotComponent, IHotComponent } from "./HotComponent";
import { HotAPI } from "./HotAPI";
import { HotFile } from "./HotFile";
import { HotLog } from "./HotLog";
import { HotPage } from "./HotPage";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, HTTPMethod, ServerAuthorizationFunction, ServerExecutionFunction } from "./HotRouteMethod";
import { HotServer } from "./HotServer";
import { HotClient } from "./HotClient";
import { IHotTestElement, HotTestElement } from "./HotTestElement";

HotPreprocessor.isWeb = true;

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
		HotPage,
		HotRoute,
		HotRouteMethod,
		HTTPMethod,
		ServerAuthorizationFunction,
		ServerExecutionFunction,
		HotServer,
		HotClient,
		HotTestElement,
		IHotTestElement
	};