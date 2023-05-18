export const FormBtnsComponet = ({
  submitText,
  resetText,
  navigateTo,
  navigate,
}) => {
  return (
    <>
      <button type="submit">{submitText}</button>
      <button type="reset" onClick={() => navigate(`/${navigateTo}`)}>
        {resetText}
      </button>
    </>
  );
};
