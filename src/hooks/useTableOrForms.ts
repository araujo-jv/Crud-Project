import { useState } from "react";

export default function useTableOrForms() {
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const displayTable = () => setVisible('table')
    const displayForms = () => setVisible('form')

    return {
        visibleForms: visible === 'form',
        visibleTable: visible === 'table',
        displayTable,
        displayForms,
    }
}