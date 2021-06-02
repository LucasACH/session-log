import type { AppProps } from "next/app";
import ThemeProvider from "../contexts/theme";
import SnackbarProvider from "../contexts/snackbar";
import ModalProvider from "../contexts/modal";
import AuthProvider from "../contexts/auth";
import NotificationsProvider from "../contexts/notifications";
import MainProvider from "../contexts/main";
import Layout from "../components/Layout";
import Snackbar from "../components/shared/Snackbar";
import Modal from "../components/shared/Modal";

import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <ModalProvider>
          <AuthProvider>
            <NotificationsProvider>
              <MainProvider>
                <Layout>
                  <Component {...pageProps} />
                  <Snackbar />
                  <Modal />
                </Layout>
              </MainProvider>
            </NotificationsProvider>
          </AuthProvider>
        </ModalProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default MyApp;
