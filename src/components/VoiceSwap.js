import { useState, useRef } from "react";
import { RiVoiceprintFill } from "react-icons/ri";

function VoiceSwap() {
    const speechToTextURL = "https://modelverse.in/speech/api/speechToText/"; //change this url
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [fileResponse, setFileResponse] = useState(null);

    const isAudioOrVideoFile = (file) => {
        return file.type.startsWith("audio/") || file.type.startsWith("video/");
    };

    // handle drag events
    const handleDrag = function (e) {
        console.log("dragging here");
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        // console.log(e)
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            if (isAudioOrVideoFile(e.dataTransfer.files[0])) {
                console.log(e.dataTransfer.files[0]);
                document.getElementById("fileUploadElement").innerText =
                    e.dataTransfer.files[0].name;
                setFile(e.dataTransfer.files[0]);
            } else {
                alert("This file type is not supported!");
            }

            // handleFiles(e.dataTransfer.files);
        }
    };
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            document.getElementById("fileUploadElement").innerText =
                e.target.files[0].name;
            console.log(e.target.files);
            setFile(e.target.files[0]);

            // handleFiles(e.target.files);
        }
    };
    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleUpload = (e) => {
        if (file) {
            console.log(file);
            var myHeaders = new Headers();
            myHeaders.append(
                "Cookie",
                "csrftoken=quiQkhq625rxLVvGNPjwOsBRi8ACDTrLGXcl35UT0JEhkiyQ211DejgVEOum5YlC; sessionid=k72exh55b4y5fwyt46gfcjeexz11vvm4"
            );

            var formdata = new FormData();
            formdata.append("file", file);

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
            };

            fetch(speechToTextURL, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    setFileResponse(result);
                })
                .catch((error) => console.log("error", error));
        }

        // if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        // console.log(e.dataTransfer.files[0].name)
        // document.getElementById("fileUploadElement").innerText = e.dataTransfer.files[0].name;
        // handleFiles(e.dataTransfer.files);
        // }
    };

    const genDownloadLink = (e) => {
        const subFileName = "subtitles";
        const subtitleData = JSON.parse(fileResponse);
        const encodedSubtitle = encodeURIComponent(subtitleData.subtitles);
        console.log(encodedSubtitle);
        const downloadButton = document.getElementById("download-button");
        console.log(downloadButton);
        downloadButton.setAttribute(
            "href",
            `data:text/plain;charset=utf-8,${encodedSubtitle}`
        );
        downloadButton.setAttribute("download", `${subFileName}.srt`);
        downloadButton.style.display = "block";
    };

    return (
        <div>
            <section className="text-gray-600 w-[100%] body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex  justify-center">
                        <div
                            className="mx-10 bg-[#D9D9D9] py- xl:w-[10%] xl:h-[30vh] md:w-fit w-full border-2 rounded-3xl hover:bg-[#D641EE] hover:text-white transition-all"
                            id="voiceswapbox"
                        >
                            <div className="bg-white w-24 h-24 mx-auto m-5 rounded-full">
                                <img
                                    className="relative w-16 mx-auto py-[15%] rounded-full"
                                    src="Bubble.png"
                                    alt="img"
                                />
                                <div className="w-fit relative bottom-[70%] left-[35%] text-3xl text-[#531EA3] rounded-full">
                                    <RiVoiceprintFill />
                                </div>
                                <div className="relative w-full bottom-5 mx-2 font-semibold text-black">
                                    Voice Swap
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#E9C7EF] py- xl:w-[45%] xl:h-[80vh] md:w-fit w-full border-2 rounded-3xl">
                            <div className=" w-full xl:h-[80vh] border-gray-100 flex flex-col relative overflow-hidden">
                                <h1 className="text-5xl text-gray-900 leading-none items-center pt-5 pb-4 mb-4 border-b border-gray-900">
                                    <span className="text-[#531EA3] px-5 font-semibold">
                                        VOICE SWAP
                                    </span>

                                    <h2 className="text-sm text-gray-700 tracking-widest title-font px-5 mb-1 mt-1 font-light">
                                        Upload a video or audio to swap the
                                        voice{" "}
                                    </h2>
                                </h1>
                                <div className="w-full my-auto">
                                    <form
                                        onDragEnter={handleDrag}
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <input
                                            ref={inputRef}
                                            accept="audio/*, video/*"
                                            type="file"
                                            className="hidden"
                                            multiple={false}
                                            onChange={handleChange}
                                        />
                                        <div className="w-fit mx-auto mb-[2%] cursor-pointer">
                                            Drop Files Here
                                        </div>
                                        <div className="w-fit mx-auto mb-[2%]">
                                            OR
                                        </div>
                                        <button
                                            id="fileUploadElement"
                                            className="flex items-center mt-auto mx-auto text-white bg-[#E578F6] border-0 py-2 px-5 w-fit focus:outline-none hover:bg-[#f151ff] transition-all rounded-full"
                                            onClick={onButtonClick}
                                        >
                                            Select a file
                                        </button>
                                        <button
                                            className="flex items-center mt-auto mx-auto text-white bg-[#E578F6] border-0 py-2 px-5 w-fit focus:outline-none hover:bg-[#f151ff] transition-all rounded-full"
                                            onClick={handleUpload}
                                        >
                                            Upload
                                        </button>
                                        <div className="w-fit mx-auto mt-[2%]">
                                            Supports .mp3,.wav, mp4
                                        </div>
                                        {dragActive && (
                                            <div
                                                id="drag-file-element"
                                                onDragEnter={handleDrag}
                                                onDragLeave={handleDrag}
                                                onDragOver={handleDrag}
                                                onDrop={handleDrop}
                                            ></div>
                                        )}
                                    </form>
                                    {fileResponse ? (
                                        <div
                                            className={
                                                "w-fit block mx-auto mt-[2%] overflow-scroll"
                                            }
                                        >
                                            response:
                                            <a
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                href="/"
                                                onClick={genDownloadLink}
                                                id="download-button"
                                            >
                                                Download Subtitles
                                            </a>
                                            <br />
                                            <pre>
                                                {JSON.parse(
                                                    fileResponse
                                                ).subtitles.join(" \n")}
                                            </pre>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VoiceSwap;
