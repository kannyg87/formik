import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const FormikErrorFocus = (): null => {
const { errors, isSubmitting, isValidating } = useFormikContext();

useEffect(() => {
if (isSubmitting && !isValidating) {
    const keys = Object.keys(errors);
    if (keys.length > 0) {
    const selector = `[name="${keys[0]}"]`;
    try {
        const errorElement = document.querySelector(selector) as HTMLElement;
        if (errorElement) {
        errorElement.scrollIntoView({
            block: 'center',
        });
        }
    } catch (e) {
        console.error(e);
    }
    }
}
}, [errors, isSubmitting, isValidating]);

return null;
};

export default FormikErrorFocus;