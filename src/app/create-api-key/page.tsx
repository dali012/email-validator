import ApiKeyForm from "@/components/ApiKeyForm";

const CreateApiKey = () => {
  return (
    <div className="container max-w-2xl py-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create API Key</h1>
        <p className="text-muted-foreground mt-2">
          Fill out the form below to generate your API key for the Email
          Validator service.
        </p>
      </div>

      <ApiKeyForm />
    </div>
  );
};

export default CreateApiKey;
