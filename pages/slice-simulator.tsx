import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";
// import state from "../.slicemachine/libraries-state.json";

import state from "../slicemachine.config.json";
import { components } from "../slices";

// const SliceSimulatorPage = () => (
//   <SliceSimulator
//     // The "sliceZone" prop should be a function receiving slices and rendering them using your "SliceZone" component.
//     sliceZone={(props) => <SliceZone {...props} components={components} />}
//     state={state}
//   />
// );

// const SliceSimulatorPage = () => (
//   <SliceSimulator
//     sliceZone={(props) => (
//       <SliceZone
//         {...props}
//         slices={(props.slices as unknown) as SliceLike<string>[]}
//         components={components}
//       />
//     )}
//     state={state as LibrariesStateLike}
//   />
// );

// export default SliceSimulatorPage;

const MyPage = () => {
  // Page content
};

export default MyPage;