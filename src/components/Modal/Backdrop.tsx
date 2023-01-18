type BackdropProps = {
  handleClick: () => void;
};

function Backdrop({ handleClick }: BackdropProps) {
  return (
    <div
      className="fixed inset-0 bg-primary bg-opacity-70 z-[90]"
      onClick={handleClick}
    ></div>
  );
}

export default Backdrop;
