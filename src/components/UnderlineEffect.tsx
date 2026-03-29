export default function UnderlineEffect({color}: {color: string}): React.ReactElement {
    return (
        <div className={`absolute left-1/2 w-full h-1 -translate-x-1/2 bg-gradient-to-r from-transparent via-${color} to-transparent`}></div>
    );
}