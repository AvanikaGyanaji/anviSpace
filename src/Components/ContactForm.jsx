import { useRef, useState } from "react";
import { File, Plus, Upload } from "lucide-react";

const userContactDetails = {
  Name: "",
  Email: "",
  CVFile: null,
  Message: "",
  FileError: false,
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(userContactDetails);

  const formRef = useRef(null);
  const handleFileChange = (e) => {
    // console.log(e)
    if (e.target.files.length > 0) {
      setFormValues((prev) => ({
        ...prev,
        CVFile: e.target.files[0],
        FileError: false,
      }));
    } else {
      CancelFileUpload();
    }
  };

  const CancelFileUpload = () => {
    const fileInput = document.getElementById("fileUpload");
    if (fileInput) {
      fileInput.value = "";
      setFormValues((prev) => ({ ...prev, CVFile: null, FileError: false }));
    }
  };

  const ContactFormSubmit = (e) => {
    e.preventDefault();

    if (!formValues.Name || !formValues.Email || !formValues.Message) {
      alert("Please fill all fields and upload a file.");
      return;
    }
    if (!formValues.CVFile) {
      setFormValues((prev) => ({ ...prev, FileError: true }));
      return;
    }

    // console.log(formValues)

    const formData = new FormData();
    formData.append("Name", formValues.Name);
    formData.append("Email", formValues.Email);
    formData.append("Message", formValues.Message);
    formData.append("CVFile", formValues.CVFile);

    // console.log("userContactDetails:", formValues);
    alert("Contact Form Submitted");
    setFormValues({
      Name: "",
      Email: "",
      CVFile: null,
      Message: "",
      FileError: false,
    });
  };

  return (
    <form
      ref={formRef}
      className="w-full figma-btn max-w-[500px] overflow-hidden mt-8 mb-15 rounded-[12px] p-[50px] text-left mx-auto flex flex-col gap-[16px] space-y-5 border-1 border-[#FEFEFE]"
      style={{ width: "100%", cursor: "auto" }}
      onSubmit={(e) => ContactFormSubmit(e)}
    >
      <div className="form-Bgimg absolute -z-1 w-full h-full left-0 top-0 bg-no-repeat bg-contain bg-bottom"></div>
      <label className="w-full">
        <span className="text-gray-300 text-sm block mb-1">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formValues.Name}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, Name: e.target.value }))
          }
          required
          className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
        />
      </label>
      <label className="w-full">
        <span className="text-gray-300 text-sm block mb-1">Email</span>
        <input
          type="email"
          name="email"
          value={formValues.Email}
          placeholder="your.email@gmail.com"
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, Email: e.target.value }))
          }
          required
          className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
        />
      </label>

      {
        <div className="flex justify-start align-middle gap-3">
          <label className="w-max">
            <span className="text-gray-300 text-sm block mb-1">
              Upload your CV
            </span>
            <div className="relative w-full">
              {/* Hidden file input */}
              <input
                type="file"
                id="fileUpload"
                name="file"
                accept=".pdf,.doc,.docx"
                // required
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Custom input look */}
              <label
                htmlFor="fileUpload"
                className="w-max flex items-center gap-2 rounded-md bg-opacity-40 border border-[#999] px-4 py-2 text-white cursor-pointer transition hover:bg-opacity-60 focus-within:ring-1 focus-within:ring-cyan-400"
              >
                {/* Upload Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {!formValues.CVFile ? (
                    <Upload color="white" />
                  ) : (
                    <File color="white" />
                  )}
                </svg>

                {/* Placeholder / File name */}
                <span
                  id="fileName"
                  className="text-[14px] max-w-[200px] h-min  overflow-ellipsis overflow-hidden text-[#999] font-[inter] font-[400]"
                >
                  {/* {console.log(formValues.CVFile)} */}
                  {formValues.CVFile && formValues.CVFile.name
                    ? formValues.CVFile.name
                    : "Add File"}
                </span>
              </label>
            </div>
          </label>
          {formValues.CVFile ? (
            <button
              type="button"
              style={{ backgroundColor: "transparent" }}
              className="p-0 h-min my-auto"
              onClick={CancelFileUpload}
            >
              {/* <Plus className="rotate-45" color="#fff" onClick={cancelFileUpload()} /> */}
              <Plus
                className="rotate-45 bg-transparent self-center"
                color="white"
                size={30}
              />
            </button>
          ) : (
            ""
          )}
        </div>
      }
      <label className="w-full">
        <span className="text-gray-300 text-sm block mb-1">Message</span>
        <textarea
          name="message"
          placeholder="Message"
          value={formValues.Message}
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              Message: e.target.value,
            }))
          }
          rows="6"
          required
          className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
        ></textarea>
      </label>
      <button
        type="submit"
        className="mt-3 m-0 font-[inter] text-[16px] hover:from-cyan-700 hover:via-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg shadow-lg transition"
      >
        Submit
      </button>
      <p className="text-sm font-[inter] font-semibold text-red-500 text-left w-full">
        {!formValues.FileError ? "" : "* Upload Your CV File"}
      </p>
    </form>
  );
};

export default ContactForm;
