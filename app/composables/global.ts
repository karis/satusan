export const CALLBACK_URL = '/dashboard'
export const API_VERSION = process.env.API_VERSION || 'v1'
export const AUTH_SECRET = process.env.AUTH_SECRET || 'Cns7mRa9lURFO6x0ka7b9NI2zPFcvXcbc1TeCzX62TY='

export function formatLocalDate(value: string) {
    // You can customize the options based on your requirements
    return new Date(value).toLocaleDateString()
}

export function formatLocalMonth(value: string) {
    if(value) {
        
    const date = new Date(value)
    return date.getFullYear()+'-'
        + String(date.getMonth() + 1).padStart(2, '0')+'-'
        + String(date.getDate()).padStart(2, '0')
    }
    else {
        const date = new Date()
    return date.getFullYear()+'-'
        + String(date.getMonth() + 1).padStart(2, '0')+'-'
        + String(date.getDate()).padStart(2, '0')
    }
}

export function formatCurrency(value: number | Number) {
    // You can customize the options based on your requirements
    return value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
}


export function formatAccounting(value: number) {
    // You can customize the options based on your requirements
    return value < 0?`(${formatCurrency(value)})` :formatCurrency(value)
    
}
export function formatAccountingByType(value: number, type: string) {
    return type.includes('ebit')?`(${formatCurrency(value)})` :formatCurrency(value)
}

export function formatInitialName(value: string) {
    if (!value) {
        return '-'
    }
    if (value.includes(' ')) {
        const split = value.split(' ')
        return `${split[0]?.[0] ?? ''}${split[1]?.[0] ?? ''}`
    } else {
        if(value.length > 1) {
            return `${value[0]}${value[1]}`
        }
        return value[0] ?? ''
    }
}