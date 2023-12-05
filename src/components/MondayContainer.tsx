import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MondayContainer.module.css";

type MondayContainerType = {
  /** Style props */
  rectangleDivCursor?: CSSProperties["cursor"];

  /** Action props */
  onGroupContainer7Click?: () => void;
};

const MondayContainer: FunctionComponent<MondayContainerType> = ({
  rectangleDivCursor,
  onGroupContainer7Click,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      cursor: rectangleDivCursor,
    };
  }, [rectangleDivCursor]);

  return (
    <div
      className={styles.groupParent}
      style={groupDivStyle}
      onClick={onGroupContainer7Click}
    >
      <div className={styles.rectangleWrapper}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupItem} />
      <div className={styles.monday}>Monday</div>
      <div className={styles.tuesday}>Tuesday</div>
      <div className={styles.wednesday}>Wednesday</div>
      <div className={styles.thursday}>Thursday</div>
      <div className={styles.friday}>Friday</div>
      <div className={styles.saturday}>Saturday</div>
      <div className={styles.sunday}>Sunday</div>
      <div className={styles.groupInner} />
      <div className={styles.lineDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.groupChild2} />
      <div className={styles.groupChild3} />
      <div className={styles.groupChild4} />
      <div className={styles.groupChild5} />
      <div className={styles.groupChild6} />
      <div className={styles.groupChild7} />
      <div className={styles.groupChild8} />
      <div className={styles.div}>27</div>
      <div className={styles.div1}>3</div>
      <div className={styles.div2}>10</div>
      <div className={styles.div3}>17</div>
      <div className={styles.div4}>24</div>
      <div className={styles.div5}>28</div>
      <div className={styles.div6}>4</div>
      <div className={styles.div7}>11</div>
      <div className={styles.div8}>18</div>
      <div className={styles.div9}>25</div>
      <div className={styles.div10}>29</div>
      <div className={styles.div11}>5</div>
      <div className={styles.div12}>12</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.div13}>19</div>
      <div className={styles.div14}>26</div>
      <div className={styles.div15}>30</div>
      <div className={styles.div16}>6</div>
      <div className={styles.div17}>13</div>
      <div className={styles.div18}>20</div>
      <div className={styles.div19}>27</div>
      <div className={styles.div20}>31</div>
      <div className={styles.div21}>7</div>
      <div className={styles.div22}>14</div>
      <div className={styles.div23}>21</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild9} />
        <div className={styles.appDesignParent}>
          <div className={styles.appDesign}>App Design</div>
          <div className={styles.dec23}>21 Dec - 23 Dec</div>
        </div>
        <div className={styles.groupChild10} />
      </div>
      <div className={styles.div24}>28</div>
      <div className={styles.div25}>1</div>
      <div className={styles.div26}>8</div>
      <div className={styles.div27}>15</div>
      <div className={styles.div28}>22</div>
      <div className={styles.div29}>29</div>
      <div className={styles.div30}>2</div>
      <div className={styles.div31}>9</div>
      <div className={styles.div32}>16</div>
      <div className={styles.div33}>23</div>
      <div className={styles.div34}>30</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild11} />
        <div className={styles.redesignWebsiteParent}>
          <div className={styles.redesignWebsite}>Redesign Website</div>
          <div className={styles.dec5}>4 Dec - 5 Dec</div>
        </div>
        <div className={styles.groupChild10} />
      </div>
    </div>
  );
};

export default MondayContainer;
