/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Loading from "../components/Loading";
import RequiredPermission from "../components/RequiredPermission";
import { ENDPOINTS } from "./endPoints";
import LandingLayout from "../layouts/LandingLayout";
import DashboardLayout from "../layouts/DashboardLayout";
const WEB_NAME = "Hematology Analyzer";

const RequiredAuth = ({ children, path }) => {
  const location = useLocation();
  // Fixed the token selector
  const token = useSelector((state) => state.auth?.token);

  if (!token) {
    return <Navigate to={path} state={{ from: location }} replace />;
  }

  return children;
};

RequiredAuth.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

const delayRoute = (ms = 500) => {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
};

// Routes configuration

const landingPage = {
  path: ENDPOINTS.INDEX,
  Layout: LandingLayout,
  component: lazy(() => delayRoute()(import("../modules/landing/features"))),
  title: WEB_NAME,
};
const courseDemoPage = {
  path: ENDPOINTS.USER.DEMO,
  component: lazy(() => delayRoute()(import("../modules/user/features"))),
  title: `Demo | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const oopsPage = {
  path: ENDPOINTS.USER.OOPS,
  component: lazy(() => delayRoute()(import("../modules/oops/features"))),
  title: `Oops | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const courseManamentPage = {
  path: ENDPOINTS.USER.MANAMENT,
  component: lazy(() => delayRoute()(import("../modules/manament/features"))),
  title: `Manament | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const noTestPage = {
  path: ENDPOINTS.USER.NOTEST,
  component: lazy(() => delayRoute()(import("../modules/notest/features"))),
  title: `Not Allowed Test | ${WEB_NAME}`,
  Layout: LandingLayout,

};
// const courseTestPage = {
//   path: ENDPOINTS.USER.TEST,
//   component: lazy(() => delayRoute()(import("../modules/test/features"))),
//   title: `Test | ${WEB_NAME}`,
//   Layout: LandingLayout,
// };
const coursePaymentPage = {
  path: ENDPOINTS.USER.PAYMENT,
  component: lazy(() => delayRoute()(import("../modules/payment/features"))),
  title: `Payment | ${WEB_NAME}`,
  Layout: LandingLayout,
}
const courseCerPage = {
  path: ENDPOINTS.USER.CER,
  component: lazy(() => delayRoute()(import("../modules/cer/features"))),
  title: `Certificate | ${WEB_NAME}`,
  Layout: LandingLayout,
}
const flashcardPage = {
  path: ENDPOINTS.USER.FLASHCARD,
  component: lazy(() => delayRoute()(import("../modules/flashcard/features"))),
  title: `Flashcard | ${WEB_NAME}`,
  Layout: LandingLayout,
}
const coursePage = {
  path: ENDPOINTS.USER.COURSES,
  component: lazy(() => delayRoute()(import("../modules/courses/features"))),
  title: `Courses | ${WEB_NAME}`,
  Layout: LandingLayout,
};

const loginPage = {
  path: ENDPOINTS.AUTH.LOGIN,
  component: lazy(() => delayRoute()(import("../modules/auth/features/login"))),
  title: `Login | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const forgotPasswordPage = {
  path: ENDPOINTS.AUTH.FORGOT_PASSWORD,
  component: lazy(() =>
    delayRoute()(import("../modules/auth/features/forgotPassword"))
  ),
  title: `Forgot Password | ${WEB_NAME}`,
  Layout: LandingLayout,
};

// Các trang khác sẽ được thêm vào đây
export const privateRouteData = [];
export const publicRoutesData = [landingPage, loginPage, forgotPasswordPage, coursePage, courseDemoPage, oopsPage, courseManamentPage, noTestPage, coursePaymentPage, courseCerPage, flashcardPage];

// Improved route rendering function
const renderRoutes = (routes, isPrivate = false) => {
  return routes.map((route, index) => {
    const {
      component: Component,
      path,
      Layout,
      requiredPermissions,
      ...rest
    } = route;

    const content = (
      <Suspense fallback={<Loading />}>
        {Layout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )}
      </Suspense>
    );

    let element = content;

    if (isPrivate) {
      element = (
        <RequiredAuth path={ENDPOINTS.AUTH.LOGIN}>
          {requiredPermissions ? (
            <RequiredPermission
              path={ENDPOINTS.USER.DASHBOARD}
              requiredPrivileges={requiredPermissions}
            >
              {content}
            </RequiredPermission>
          ) : (
            content
          )}
        </RequiredAuth>
      );
    }

    return (
      <Route
        {...rest}
        key={`${isPrivate ? "private" : "public"}-route-${index}`}
        path={path}
        element={element} // ✅ Fix: sử dụng biến element đã build đúng
      />
    );
  });
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(publicRoutesData)}
        {renderRoutes(privateRouteData, true)}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
