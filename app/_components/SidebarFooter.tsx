import Theme from "./Theme";

export default function SidebarFooter() {
  return (
    <footer>
      <Theme />
      <div className="my-5 border-t bg-muted"></div>

      <div className="text-sm leading-relaxed">
        <p className="text-muted-foreground">Feel free to reach out 👇</p>
        <p className="truncate" title="jerandeduro16@gmail.com">
          jerandeduro16@gmail.com
        </p>
      </div>
    </footer>
  );
}
