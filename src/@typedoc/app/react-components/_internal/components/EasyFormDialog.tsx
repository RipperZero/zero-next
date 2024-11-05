import { FC } from "react";

/** The props type of {@link EasyFormDialog | `EasyFormDialog`}. */
type EasyFormDialogProps = {
  /** The title of the dialog. Can be a JSX element. */
  title: React.ReactNode;

  /** The text of the submit button. */
  submitButtonText: string;

  /** The CSS class of the submit button. */
  submitButtonClass?: string;

  /** The text of the cancel button. Defaults to "Cancel". */
  cancelButtonText?: string;

  /**
   * Allows you to disable the submit button even if `getSubmitEnabled()`
   * would return true.
   *
   * This can be useful if you want to disable the submit button while a query
   * is in progress.
   */
  submitEnabled?: boolean;

  /** A boolean indicating if the form is valid. */
  formIsValid: boolean;

  /** A boolean indicating if validation feedback is being shown. */
  showValidation: boolean;

  /** A callback that fires when the dialog is submitted. */
  onShowValidationChange(showValidation: boolean): void;

  /**
   * A callback that fires after the `submit` function succeeds.
   *
   * If the `submit` function returned `responseData`, it is passed to your
   * `onSuccess` function.
   *
   * Your `onSuccess` callback must return a promise. The submit button will
   * continue showing a loading indicator until the promise resolves. This is
   * to support refetching the data that was updated by the form submission.
   */
  onSuccess(payload: unknown | undefined): Promise<void>;

  /**
   * A callback that fires when the dialog has completely closed. Your
   * `onClose` callback should update call, for example,
   * `setDialogVisible(false)` so that the `EasyFormDialog` is no longer
   * rendered.
   */
  onClose(): void;

  /**
   * A callback that fires when the form is submitted. You will typically
   * perform an API call in your `submit` function.
   *
   * Your `submit` function can optionally return an object in the shape
   *
   * ```
   * {
   *     shouldClose?: boolean
   *     responseData: unknown
   * }
   * ```
   *
   * Using `formData` is deprecated. Use controlled components instead.
   *
   * `formData` will be `{}` if the optional peer dependency `jquery` is not
   * installed.
   */
  onSubmit(formData: Record<string, string | boolean>):
    | Promise<
        | {
            shouldClose?: boolean;
            responseData: unknown;
          }
        | undefined
      >
    | Promise<void>;

  /**
   * An uncommonly-used callback that fires when the user clicks the cancel button.
   */
  onCancel?(): void;

  /**
   * This prop accepts a ref object that holds a function of type `() =>
   * void`. You can execute the function to programmatically close the dialog:
   *
   * ```
   * closeRef.current()
   * ```
   */
  closeRef?: React.MutableRefObject<() => void>;

  /** The CSS class added to the underlying Bootstrap modal. */
  modalClass?: string;

  /**
   * Set to `false` to disable the default behavior of focusing the first
   * input.
   */
  focusFirst?: boolean;

  /**
   * Set to `false` to hide the modal footer, which contains the submit and
   * cancel buttons.
   */
  showFooter?: boolean;
};

/**
 * An example of a complex React component.
 *
 * A wrapper around `ActionDialog` that removes a lot of the boilerplate needed
 * for dialogs that contain a form.
 *
 * ```tsx
 * interface ExampleProps {
 *     onSuccess(responseData: number): Promise<void>
 *     onClose(): void
 * }
 *
 * export function Example({
 *     onSuccess,
 *     onClose,
 * }: ExampleProps): ReactElement {
 *     const { onChildValidChange, allFieldsValid } = useFieldValidity()
 *     const [showValidation, setShowValidation] = useState(false)
 *     const vProps = { showValidation, onValidChange: onChildValidChange }
 *
 *     const [myNumber, setMyNumber] = useState('')
 *
 *     async function submit() {
 *         await api.product.performOperation()
 *
 *         return {
 *             responseData: parseInt(myNumber),
 *         }
 *     }
 *
 *     return (
 *         <EasyFormDialog
 *             title="Enter a Number"
 *             submitButtonText="Submit"
 *             formIsValid={allFieldsValid}
 *             showValidation={showValidation}
 *             onShowValidationChange={setShowValidation}
 *             onSubmit={submit}
 *             onSuccess={onSuccess}
 *             onClose={onClose}
 *         >
 *             <FormGroup label="My number">
 *                 {(id) => (
 *                     <ValidatedInput
 *                         id={id}
 *                         name="myNumber"
 *                         validators={[Validators.required(), Validators.integer()]}
 *                         value={myNumber}
 *                         onChange={setMyNumber}
 *                         {...vProps}
 *                     />
 *                 )}
 *             </FormGroup>
 *         </EasyFormDialog>
 *     )
 * }
 * ```
 * @category Component
 */
const EasyFormDialog: FC<EasyFormDialogProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <div />;
  // #endregion render functions end
};

export type { EasyFormDialogProps };
export { EasyFormDialog };
