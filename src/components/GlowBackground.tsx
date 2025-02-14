const GlowBackground = ({ className }: { className?: string }) => {
  const style: React.CSSProperties = {
    height: "500px",
    width: "100vw",
    borderRadius: "94px",
    background: `
      radial-gradient(52.52% 32.71% at 50% 97.66%, 
      rgba(36, 160, 181, 0.2) 0%, 
      rgba(36, 160, 181, 0) 100%), 
      #02191d`,
    position: "absolute",
    zIndex: -10,
    bottom: 0,
  };

  return <div className={className} style={style} />;
};

export default GlowBackground;
