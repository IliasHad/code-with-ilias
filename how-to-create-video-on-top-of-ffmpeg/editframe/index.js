const { Editframe } = require("@editframe/editframe-js");
const path = require("path");
const fs = require("fs");
const editframe = new Editframe({
  token: "9TMCBhSkvHlkXPvQD5lqxG",
  develop: true,
});

const renderVideo = async () => {
  const composition = await editframe.videos.new({
    backgroundColor: "#fff",
    dimensions: {
      height: 1920,
      width: 1080,
    },
    duration: 15,
  });

  composition.addText(
    {
      text: "Travel vlog",
      color: "#000",
      fontSize: 70,
      fontFamily: "Arial",
    },
    {
      position: {
        x: "center",
        y: 100,
      },
    }
  );
  await composition.addVideo(path.resolve(__dirname, "video-1.mp4"), {
    size: {
      format: "fit",
    },
    position: {
      x: "center",
      y: "center",
    },
    timeline: {
      start: 0,
      end: 5,
    },
    transitions: [
      {
        type: "fadeIn",
        duration: 1,
      },
    ],
  });
  await composition.addVideo(path.resolve(__dirname, "video-2.mp4"), {
    size: {
      format: "fit",
    },
    position: {
      x: "center",
      y: "center",
    },
    timeline: {
      start: 5,
      end: 10,
    },
    transitions: [
      {
        type: "fadeIn",
        duration: 1,
      },
    ],
  });
  await composition.addVideo(path.resolve(__dirname, "video-3.mp4"), {
    size: {
      format: "fit",
    },
    position: {
      x: "center",
      y: "center",
    },
    timeline: {
      start: 10,
      end: 15,
    },
    transitions: [
      {
        type: "fadeIn",
        duration: 1,
      },
    ],
  });
  const config = composition.generateConfig();
  fs.writeFileSync("config.json", JSON.stringify(config, null, 2));
};

renderVideo();
