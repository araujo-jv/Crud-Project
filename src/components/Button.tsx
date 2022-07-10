interface ButtonProps {
    fromColor?: 'from-green-400' | 'from-blue-400' | 'from-gray-400'
    toColor?: 'to-green-700' | 'to-blue-700' | 'to-gray-700'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const fromColor = props.fromColor ?? 'from-gray-400'
    const toColor = props.toColor ?? 'to-gray-700'
    return (
        <button onClick = {props.onClick} className={`
            bg-gradient-to-r ${fromColor} ${toColor}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}