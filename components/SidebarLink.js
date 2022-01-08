function SidebarLink({ text, active, Icon }) {
  return (
    <div
      className={`text-secondary-default flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
