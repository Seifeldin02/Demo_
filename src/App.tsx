import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginStaff from "./pages/LoginStaff";
import ViewDashboardJoinUs1 from "./pages/ViewDashboardJoinUs1";
import ViewCalendar2 from "./pages/ViewCalendar2";
import ViewDashboardCarbonAnalysis from "./pages/ViewDashboardCarbonAnalysis";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OtpRegistration from "./pages/OtpRegistration";
import ProfilePersonalDetails from "./pages/ProfilePersonalDetails";
import ProfileRemoveChanges21 from "./pages/ProfileRemoveChanges2";
import ViewDashboardJoinUs3 from "./pages/ViewDashboardJoinUs3";
import ViewCalendar1 from "./pages/ViewCalendar1";
import ViewDashboardJoinUs2 from "./pages/ViewDashboardJoinUs2";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SelectOption from "./pages/SelectOption";
import ProfilePersonalDetailsStaf from "./pages/ProfilePersonalDetailsStaf";
import ManageCarbonAnalysis from "./pages/ManageCarbonAnalysis";
import Managecalendar from "./pages/Managecalendar";
import ViewDashboardADAPTATION from "./pages/ViewDashboardADAPTATION";
import ViewCalendar from "./pages/ViewCalendar";
import Addentry from "./pages/Addentry";
import ViewDashboardJoinUsPartic from "./pages/ViewDashboardJoinUsPartic";
import ViewDashboardJoinUs from "./pages/ViewDashboardJoinUs";
import ViewDashboardElectricity from "./pages/ViewDashboardElectricity";
import ViewDashboardWater from "./pages/ViewDashboardWater";
import ViewDashboardOilWaste from "./pages/ViewDashboardOilWaste";
import ProfileRemoveChanges1 from "./pages/ProfileRemoveChanges1";
import ProfileRemoveChanges from "./pages/ProfileRemoveChanges";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardjoin-us3":
        title = "";
        metaDescription = "";
        break;
      case "/view-calendar2":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardcarbon-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/otp-registration":
        title = "";
        metaDescription = "";
        break;
      case "/profilepersonal-details":
        title = "";
        metaDescription = "";
        break;
      case "/profileremove-changes":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardjoin-us1":
        title = "";
        metaDescription = "";
        break;
      case "/view-calendar":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardjoin-us2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/select-option":
        title = "";
        metaDescription = "";
        break;
      case "/profilepersonal-details-staff":
        title = "";
        metaDescription = "";
        break;
      case "/manage-carbon-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/managecalendar":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardadaptation1":
        title = "";
        metaDescription = "";
        break;
      case "/view-calendar1":
        title = "";
        metaDescription = "";
        break;
      case "/addentry":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardjoin-us-participant-list":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardjoin-us4":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardelectricity":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardwater":
        title = "";
        metaDescription = "";
        break;
      case "/view-dashboardoil-waste":
        title = "";
        metaDescription = "";
        break;
      case "/profileremove-changes2":
        title = "";
        metaDescription = "";
        break;
      case "/profileremove-changes3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginStaff />} />
      <Route
        path="/view-dashboardjoin-us3"
        element={<ViewDashboardJoinUs1 />}
      />
      <Route path="/view-calendar2" element={<ViewCalendar2 />} />
      <Route
        path="/view-dashboardcarbon-analysis"
        element={<ViewDashboardCarbonAnalysis />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp-registration" element={<OtpRegistration />} />
      <Route
        path="/profilepersonal-details"
        element={<ProfilePersonalDetails />}
      />
      <Route
        path="/profileremove-changes"
        element={<ProfileRemoveChanges21 />}
      />
      <Route
        path="/view-dashboardjoin-us1"
        element={<ViewDashboardJoinUs3 />}
      />
      <Route path="/view-calendar" element={<ViewCalendar1 />} />
      <Route
        path="/view-dashboardjoin-us2"
        element={<ViewDashboardJoinUs2 />}
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/select-option" element={<SelectOption />} />
      <Route
        path="/profilepersonal-details-staff"
        element={<ProfilePersonalDetailsStaf />}
      />
      <Route
        path="/manage-carbon-analysis"
        element={<ManageCarbonAnalysis />}
      />
      <Route path="/managecalendar" element={<Managecalendar />} />
      <Route
        path="/view-dashboardadaptation1"
        element={<ViewDashboardADAPTATION />}
      />
      <Route path="/view-calendar1" element={<ViewCalendar />} />
      <Route path="/addentry" element={<Addentry />} />
      <Route
        path="/view-dashboardjoin-us-participant-list"
        element={<ViewDashboardJoinUsPartic />}
      />
      <Route path="/view-dashboardjoin-us4" element={<ViewDashboardJoinUs />} />
      <Route
        path="/view-dashboardelectricity"
        element={<ViewDashboardElectricity />}
      />
      <Route path="/view-dashboardwater" element={<ViewDashboardWater />} />
      <Route
        path="/view-dashboardoil-waste"
        element={<ViewDashboardOilWaste />}
      />
      <Route
        path="/profileremove-changes2"
        element={<ProfileRemoveChanges1 />}
      />
      <Route
        path="/profileremove-changes3"
        element={<ProfileRemoveChanges />}
      />
    </Routes>
  );
}
export default App;
