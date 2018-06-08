import { ReactNode } from "react";
import { WithTheme } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

export interface AppProps extends React.Props<{}> {
}

export interface LoginProps extends RouteComponentProps<{}>, React.Props<{}> {
}

export interface RegisterProps {
}