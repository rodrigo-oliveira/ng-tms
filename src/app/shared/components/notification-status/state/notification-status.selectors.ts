import { AppState } from "../../../../state/app.state";

export const notificationStatusSelector = (appState: AppState) => appState.notificationStatus.status;