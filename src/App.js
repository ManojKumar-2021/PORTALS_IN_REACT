import "./styles.css";
import { Modal, ModalContent } from "./Modal";

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Modal>
        <ModalContent />
      </Modal>
    </div>
  );
}
