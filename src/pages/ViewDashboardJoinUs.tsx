import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import styles from "./ViewDashboardJoinUs.module.css";

const ViewDashboardJoinUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardjoin-us-participant-list");
  }, [navigate]);

  const onMenuItemContainer1Click = useCallback(() => {
    navigate("/addentry");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-dashboardjoin-us-participant-list");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/view-dashboardelectricity");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/view-dashboardwater");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/view-dashboardoil-waste");
  }, [navigate]);

  const onElectricityConsumptionBillClick = useCallback(() => {
    navigate("/view-dashboardelectricity");
  }, [navigate]);

  const onWaterConsumptionBillClick = useCallback(() => {
    navigate("/view-dashboardwater");
  }, [navigate]);

  const onCookingOilWasteConsumptionClick = useCallback(() => {
    navigate("/view-dashboardoil-waste");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardJoinUs}>
      <ProfileContainer
        menuItemOverflow="hidden"
        frameDivCursor="unset"
        adaptationColor="2px solid #8a99af"
        adaptationCursor="pointer"
        joinUsCursor="pointer"
        joinUsColor="2px solid #8a99af"
        menuItemColor="#fff"
        menuItemCursor="pointer"
        frameDivCursor1="pointer"
        onCarbonAnalysisTextClick={onCarbonAnalysisTextClick}
        onAdaptationTextClick={onAdaptationTextClick}
        onJoinUsTextClick={onJoinUsTextClick}
        onMenuItemContainer1Click={onMenuItemContainer1Click}
      />
      <Header
        componentTitle="DASHBOARD"
        userLabel="Staff"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.joinUs}>Join Us</div>
      <div className={styles.participantDetails}>Participant details</div>
      <div className={styles.backParent} onClick={onGroupContainerClick}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.viewDashboardJoinUsChild} />
      <img
        className={styles.viewDashboardJoinUsItem}
        alt=""
        src="/rectangle-251@2x.png"
        onClick={onRectangleImageClick}
      />
      <img
        className={styles.viewDashboardJoinUsInner}
        alt=""
        src="/rectangle-26@2x.png"
        onClick={onRectangleImage1Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-27@2x.png"
        onClick={onRectangleImage2Click}
      />
      <img
        className={styles.doneRingRoundIcon}
        alt=""
        src="/done-ring-round.svg"
      />
      <img
        className={styles.doneRingRoundIcon1}
        alt=""
        src="/done-ring-round.svg"
      />
      <img
        className={styles.doneRingRoundIcon2}
        alt=""
        src="/done-ring-round.svg"
      />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2826@2x.png" />
      <div className={styles.nameAmirahAbdullahContainer}>
        <p className={styles.nameAmirahAbdullah}>Name: Amirah Abdullah</p>
        <p className={styles.nameAmirahAbdullah}>IC No:</p>
        <p className={styles.nameAmirahAbdullah}>{`Address: `}</p>
        <p className={styles.nameAmirahAbdullah}>HP No.:</p>
        <p className={styles.nameAmirahAbdullah}>Date of birth:</p>
        <p className={styles.nameAmirahAbdullah}>Status:</p>
        <p className={styles.nameAmirahAbdullah}>Home Owner Type:</p>
      </div>
      <div
        className={styles.electricityConsumptionBill}
        onClick={onElectricityConsumptionBillClick}
      >
        Electricity Consumption Bill
      </div>
      <div className={styles.electricityConsumptionBill1}>
        Electricity Consumption Bill
      </div>
      <div
        className={styles.waterConsumptionBill}
        onClick={onWaterConsumptionBillClick}
      >
        Water Consumption Bill
      </div>
      <div className={styles.waterConsumptionBill1}>Water Consumption Bill</div>
      <div
        className={styles.cookingOilwasteConsumption}
        onClick={onCookingOilWasteConsumptionClick}
      >
        Cooking Oil/Waste Consumption Receipt
      </div>
      <div className={styles.cookingOilwasteConsumption1}>
        Cooking Oil/Waste Consumption Receipt
      </div>
    </div>
  );
};

export default ViewDashboardJoinUs;
