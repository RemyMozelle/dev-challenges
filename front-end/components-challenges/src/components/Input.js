import React from 'react';

let defaultProps = {
    label: 'Label',
    error: false,
    disabled: false,
    helperText: '',
    startIcon: '',
    endIcon: '',
    size: 'md',
    multiline: false,
    rows: '',
}

function Input({ label, error, disabled, helperText, startIcon, endIcon, size, multiline, rows, attributes }) {

    function giveCorrectClassNames(prefixClass) {
        let classNames = prefixClass + ' ';

        if (error) {
            classNames += prefixClass + '-error';
        }

        if (startIcon) {
            classNames += prefixClass + '-icon-left';
        }

        if (endIcon) {
            classNames += prefixClass + '-icon-right';
        }

        if (disabled === true) {
            classNames += prefixClass + '-disabled'
        }

        if (size) {
            classNames += ' ' + prefixClass + '-' + size
        }

        return classNames;
    }

    return (
        <div className="input-container">
            <label className={giveCorrectClassNames('label')}>{label}</label>

            {multiline === true ? (
                <div className={giveCorrectClassNames('input-multiline')} data-icon={startIcon || endIcon}>
                    <textarea {...attributes} className={giveCorrectClassNames('input-field-multiline')} rows={rows}></textarea>
                </div>
            ) :
                (
                    <div className={giveCorrectClassNames('input')} data-icon={startIcon || endIcon}>
                        <input {...attributes} className={giveCorrectClassNames('input-field')} type="text" placeholder="Placeholder" disabled={disabled} />
                    </div>
                )
            }
            {helperText.length > 0 ?
                <span className={giveCorrectClassNames('helper-text')}>{helperText}</span> : ''
            }
        </div>
    )
}

Input.defaultProps = defaultProps

export default Input;