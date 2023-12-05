import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardJoinUs.module.css";

const ViewDashboardJoinUs11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardJoinUs}>
      <div className={styles.menuItemParent} style={frameDivStyle}>
        <div
          className={styles.menuItem}
          style={menuItem3Style}
          onClick={onMenuItemContainerClick}
        >
          <div className={styles.userAlt4Parent}>
            <img className={styles.userAlt4Icon} alt="" src="/useralt4.svg" />
            <div className={styles.profile}>Profile</div>
          </div>
        </div>
        <div className={styles.mainLogo}>
          <img
            className={styles.imageRemovebgPreview1Icon}
            alt=""
            src="/imageremovebgpreview-11@2x.png"
          />
          <div className={styles.iprkParent}>
            <div className={styles.iprk}>IPRK</div>
            <div className={styles.iskandarPuteriRendah}>
              ISKANDAR PUTERI RENDAH KARBON
            </div>
          </div>
        </div>
        <div className={styles.signOut}>Sign Out</div>
        <img
          className={styles.signOutSqureIcon}
          alt=""
          src="/sign-out-squre.svg"
        />
        <div
          className={styles.carbonAnalysis}
          style={carbonAnalysis1Style}
          onClick={onCarbonAnalysisTextClick}
        >
          Carbon Analysis
        </div>
        <div
          className={styles.adaptation}
          style={adaptation1Style}
          onClick={onAdaptationTextClick}
        >
          Adaptation
        </div>
        <div
          className={styles.joinUs}
          style={joinUs2Style}
          onClick={onJoinUsTextClick}
        >
          Join Us!
        </div>
        <div
          className={styles.menuItem1}
          style={menuItem4Style}
          onClick={onMenuItemContainer1Click}
        >
          <div className={styles.userAlt4Parent}>
            <img
              className={styles.userAlt4Icon}
              alt=""
              src="/calenderalt2.svg"
            />
            <div className={styles.profile}>Calendar</div>
          </div>
        </div>
        <div className={styles.menuItem2}>
          <div className={styles.frameParent}>
            <div className={styles.gridAltParent}>
              <img className={styles.userAlt4Icon} alt="" src="/gridalt.svg" />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <img
              className={styles.chevronUp2Icon}
              alt=""
              src="/chevronup-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard1} style={dASHBOARDStyle}>
          {componentTitle}
        </div>
        <div className={styles.groupParent} style={groupDivStyle}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-1000003666.svg"
          />
          <div className={styles.thomasAnreeWrapper}>
            <div className={styles.thomasAnree}>Thomas Anree</div>
          </div>
        </div>
        <div className={styles.user} style={user1Style}>
          {userLabel}
        </div>
      </div>
      <div className={styles.joinUs1}>Join Us</div>
      <div className={styles.countMeIn}>Count me in!</div>
      <div className={styles.step4Summary}>Step 4: Summary details</div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.viewDashboardJoinUsChild}
        alt=""
        src="/rectangle-231@2x.png"
      />
      <div className={styles.viewDashboardJoinUsItem} />
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
      <div className={styles.viewDashboardJoinUsInner} />
      <div className={styles.submitForm}>submit form</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <div className={styles.termsConditionsContainer}>
        <span>{`Terms & conditions applies. Click `}</span>
        <span className={styles.here}>here</span>
        <span> to learn more</span>
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2826@2x.png" />
      <div className={styles.nameIcNoContainer}>
        <p className={styles.name}>Name:</p>
        <p className={styles.name}>IC No:</p>
        <p className={styles.name}>{`Address: `}</p>
        <p className={styles.name}>HP No.:</p>
        <p className={styles.name}>Date of birth:</p>
        <p className={styles.name}>Status:</p>
        <p className={styles.name}>Home Owner Type:</p>
      </div>
      <div className={styles.electricityConsumptionBill}>
        Electricity Consumption Bill
      </div>
      <div className={styles.waterConsumptionBill}>Water Consumption Bill</div>
      <div className={styles.cookingOilwasteConsumption}>
        Cooking Oil/Waste Consumption Receipt
      </div>
    </div>
  );
};

export default ViewDashboardJoinUs11;
