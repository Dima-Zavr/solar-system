import './Panel.css';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export const Panel = ({ children, className }: PanelProps) => {
  return <div className={`panel ${className}`}> {children}</div>;
};
