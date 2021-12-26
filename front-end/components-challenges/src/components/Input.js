import React, { useState } from 'react';

const defaultProps = {
    label: 'Label',
    error: false,
    disabled: false,
    helperText: '',
    startIcon: '',
    endIcon: '',
    size: 'md',
    multiline: false,
    fullWidth: false,
    rows: '',
    placeholder: '',
    value: '',
}

function Input({ label, placeholder, error, disabled, helperText, startIcon, endIcon, value, size, multiline, rows, attributes, fullWidth }) {

    const [state, setState] = useState(value);

    const handleChange = event => {
        setState(event.target.value);
    }

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
            classNames += prefixClass + '-disabled';
        }

        if (size) {
            classNames += ' ' + prefixClass + '-' + size;
        }

        if (fullWidth === true) {
            classNames += ' fullWidth';
        }

        return classNames;
    }

    return (
        <div className={fullWidth ? 'input-container fullWidth' : 'input-container'}>
            <label className={giveCorrectClassNames('label')}>{label}</label>

            {multiline === true ? (
                <div className={giveCorrectClassNames('input-multiline')} data-icon={startIcon || endIcon}>
                    <textarea {...attributes}
                        onChange={handleChange}
                        className={giveCorrectClassNames('input-field-multiline')}
                        placeholder={placeholder}
                        rows={rows}
                        disabled={disabled}
                        defaultValue={state}
                    ></textarea>
                </div>
            ) :
                (
                    <div className={giveCorrectClassNames('input')} data-icon={startIcon || endIcon}>
                        <input {...attributes}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className={giveCorrectClassNames('input-field')}
                            type="text"
                            disabled={disabled}
                            value={state}
                        />
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