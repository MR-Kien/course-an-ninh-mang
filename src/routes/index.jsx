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
const WEB_NAME = "LozoAcademy";

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
};
const courseCerPage = {
  path: ENDPOINTS.USER.CER,
  component: lazy(() => delayRoute()(import("../modules/cer/features"))),
  title: `Certificate | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const flashcardPage = {
  path: ENDPOINTS.USER.FLASHCARD,
  component: lazy(() => delayRoute()(import("../modules/flashcard/features"))),
  title: `Flashcard | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const coursePage = {
  path: ENDPOINTS.USER.COURSES,
  component: lazy(() => delayRoute()(import("../modules/courses/features"))),
  title: `Courses | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const premiumPage = {
  path: ENDPOINTS.USER.PREMIUM,
  component: lazy(() => delayRoute()(import("../modules/premium/features"))),
  title: `Premium | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const sampleTestPage = {
  path: ENDPOINTS.USER.SAMPLETEST,
  component: lazy(() => delayRoute()(import("../modules/sampleTest/features"))),
  title: `Sample Test | ${WEB_NAME}`,
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
const signinpage = {
  path: ENDPOINTS.AUTH.SIGNIN,
  component: lazy(() =>
    delayRoute()(import("../modules/auth/features/signin"))
  ),
  title: `Sign In | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const signinSuccessPage = {
  path: ENDPOINTS.AUTH.SIGNIN_SUCCESS,
  component: lazy(() =>
    delayRoute()(import("../modules/auth/features/signinSuccess"))
  ),
  title: `Sign In | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const adminDashboardPage = {
  path: ENDPOINTS.USER.ADMINDASHBOARD,
  component: lazy(() =>
    delayRoute()(import("../modules/admindashboard/features/index"))
  ),
  title: `Dashboard | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const userDashboardPage = {
  path: ENDPOINTS.USER.USERDASHBOARD,
  component: lazy(() =>
    delayRoute()(import("../modules/userdashboard/features/index"))
  ),
  title: `Dashboard | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const labsPage = {
  path: ENDPOINTS.USER.LABS,
  component: lazy(() => delayRoute()(import("../modules/labs/features/index"))),
  title: `Labs | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const cftPage = {
  path: ENDPOINTS.USER.CFT,
  component: lazy(() => delayRoute()(import("../modules/ctf/features/index"))),
  title: `CFT | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const chatbotPage = {
  path: ENDPOINTS.USER.CHATBOT,
  component: lazy(() =>
    delayRoute()(import("../modules/chatbot/features/index"))
  ),
  title: `Chatbot | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const coursesPage = {
  path: ENDPOINTS.USER.COURSE,
  component: lazy(() =>
    delayRoute()(import("../modules/course/features/index"))
  ),
  title: `Courses | ${WEB_NAME}`,
  Layout: LandingLayout,
};
const aboutPage = {
  path: ENDPOINTS.USER.ABOUT,
  component: lazy(() =>
    delayRoute()(import("../modules/about/features/index"))
  ),
  title: `About | ${WEB_NAME}`,
  Layout: LandingLayout,
};

// Các trang khác sẽ được thêm vào đây
export const privateRouteData = [];
export const publicRoutesData = [
  landingPage,
  loginPage,
  forgotPasswordPage,
  coursePage,
  courseDemoPage,
  oopsPage,
  courseManamentPage,
  noTestPage,
  coursePaymentPage,
  courseCerPage,
  flashcardPage,
  premiumPage,
  sampleTestPage,
  adminDashboardPage,
  userDashboardPage,
  labsPage,
  cftPage,
  chatbotPage,
  coursesPage,
  aboutPage,
  signinpage,
  signinSuccessPage,
];

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
