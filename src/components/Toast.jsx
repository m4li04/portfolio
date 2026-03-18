export default function Toast({ toast }) {
  return (
    <div className={`toast${toast.show ? " show" : ""}`}>
      <span>{toast.icon}</span> {toast.text}
    </div>
  );
}
