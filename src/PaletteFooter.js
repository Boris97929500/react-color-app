import React from 'react'

export default function PaletteFooter(props) {
    const { paletteName } = props;
    return (
        <footer className="Palette-footer">
            {paletteName}
        </footer>
    )
}
