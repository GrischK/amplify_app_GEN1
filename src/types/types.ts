import type {UseAuthenticator} from "@aws-amplify/ui-react-core";
import type {AuthUser} from "aws-amplify/auth";

export type AppProps = {
    signOut?: UseAuthenticator["signOut"]; //() => void;
    user?: AuthUser;
};