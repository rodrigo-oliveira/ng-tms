import { AppState } from "../../../../state/app.state";

export const loadingSelector = (appState: AppState) => appState.loading.status;