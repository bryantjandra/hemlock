import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    } else {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    }
  }

  function onError(data) {}

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              return (
                value <= getValues().regularPrice ||
                "Discount should be less than regular price"
              );
            },
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          disabled={isWorking}
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
            validate: (value) => {
              if (isEditSession && !value.length) return true;
              return value?.length || "Image is required";
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

// This code demonstrates a form for creating or editing cabins using **React Hook Form** for form state management and validation, and custom hooks (`useCreateCabin` and `useEditCabin`) to handle API requests for creating or editing cabins. Let's break down the important parts of this implementation.

// ### **Overview of What's Happening**

// 1. **`useForm()` from React Hook Form:**
//    `useForm()` is a hook provided by `react-hook-form`, which simplifies form handling in React by managing form state, validation, and submission handling.

//    - **`register`**: Registers each input field with `react-hook-form`, enabling value collection and validation.
//    - **`handleSubmit`**: Wraps the form submission logic. It automatically prevents the default form submission and calls the specified callback functions (`onSubmit` and `onError`).
//    - **`reset`**: Resets the form to its default values (used after a successful form submission).
//    - **`getValues`**: Used to retrieve current form values (useful for custom validation, e.g., comparing `discount` with `regularPrice`).
//    - **`formState.errors`**: Stores validation errors, which can be used to display error messages.

// 2. **Custom Hooks (`useCreateCabin` and `useEditCabin`)**:
//    These hooks handle the logic for making API calls to either create or edit a cabin. They also manage the loading state (`isCreating`, `isEditing`) and success/error callbacks.

//    - **`useCreateCabin`**: Handles the logic for creating a new cabin via an API call.
//    - **`useEditCabin`**: Handles the logic for editing an existing cabin via an API call.

// 3. **Conditional Logic for Create/Edit Mode**:
//    The form can either be used to create a new cabin or edit an existing cabin. The mode is determined by whether the `cabinToEdit` prop contains an `id` (i.e., whether it's an edit session).

//    - **`isEditSession`**: Boolean flag that indicates whether the form is being used to edit an existing cabin. This determines whether to call `editCabin` or `createCabin` on form submission.
//    - **`onSubmit` Function**: Handles form submission. If it's an edit session, `editCabin` is called; otherwise, `createCabin` is called.

// 4. **Validation Rules**:
//    - Each input field is registered with validation rules. For example, the cabin name is required, the `maxCapacity` has a minimum value, and the `discount` is validated against the `regularPrice`.
//    - Custom validation logic is applied to fields like `discount` and `image`. For example, the `discount` cannot exceed the `regularPrice`, and the `image` field is conditionally required based on whether the form is in edit mode.

// 5. **Form State Handling**:
//    - **`isWorking`**: A flag that combines `isCreating` and `isEditing` to disable form fields while an API request is in progress.
//    - **Error Handling**: The validation errors from `formState.errors` are displayed next to each field, and `onError` can be customized to handle other submission errors.

// 6. **Submit and Reset Buttons**:
//    - The submit button is conditionally labeled based on whether it's a create or edit operation (`"Edit cabin"` or `"Create new cabin"`).
//    - The form includes a reset button to cancel and clear the form fields.

// ### **How React Hook Form Works in This Context**

// - **Form Registration and Validation**:
//   `register` is used to connect each input field to the form. The field's value and validation rules are managed automatically. For instance:
//   ```jsx
//   {...register("name", { required: "This field is required" })}
//   ```
//   This ensures that the `name` field is validated for being required, and the error message will be displayed if the user leaves it blank.

// - **Form State and Errors**:
//   The `formState.errors` object tracks validation errors for each field. These errors can be displayed next to their respective inputs. For example:
//   ```jsx
//   error={errors?.name?.message}
//   ```
//   This passes any error message related to the `name` field to the `FormRow` component to display below the input.

// - **Handling File Inputs**:
//   The `FileInput` field is handled separately to ensure the uploaded file is processed correctly. Depending on whether the form is being used to edit or create, the `required` rule for the `image` field is conditionally applied.

// - **Form Submission**:
//   When the user submits the form, `handleSubmit` is called. This function validates the form, and if everything is valid, it calls the `onSubmit` function. The `onSubmit` function decides whether to call `editCabin` or `createCabin` based on the mode of the form.
