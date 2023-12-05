import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "../components/FormContainer1";
import Header from "../components/Header";
import ProfileRemoveChanges2 from "../components/ProfileRemoveChanges2";
import styles from "./ProfileRemoveChanges.module.css";

const ProfileRemoveChanges: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProfileRemoveChangesContainerClick = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  return (
    <div
      className={styles.profileRemoveChanges}
      onClick={onProfileRemoveChangesContainerClick}
    >
      <FormContainer1 />
      <Header componentTitle="PROFILE" userLabel="User" />
      <div className={styles.name}>Name</div>
      <div className={styles.emailAddress}>Email address</div>
      <div className={styles.address}>Address</div>
      <div className={styles.profileRemoveChangesChild} />
      <div className={styles.removesSuccessfully}>Removes successfully</div>
      <ProfileRemoveChanges2 />
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
    </div>
  );
};

export default ProfileRemoveChanges;
