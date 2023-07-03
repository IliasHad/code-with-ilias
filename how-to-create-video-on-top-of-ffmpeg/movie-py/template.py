from moviepy.editor import *
from moviepy.video.fx.all import crop


# Utility function to process the video
def process_video(path):
     clip = VideoFileClip(path)
     clip = clip.subclip(0, 5)
     (w, h) = clip.size
     crop_width = h * 9/16
     x1 = (w - crop_width)//2
     y1 = 0
     cropped_clip = crop(clip, x1=x1, y1=y1)
     return cropped_clip



# Step 1: Create a blank template
width, height = 1080, 1920
duration = 15  # Duration of the template in seconds

template = ColorClip((width, height), col=(255, 255, 255), duration=duration)


# Step 2: Add text and graphics
text = TextClip("Travel Vlog", fontsize=70, color='black', font='Arial', stroke_color='white', stroke_width=2).set_position(("center", 0.1), relative=True).set_duration(duration)


# Step 3: Add videos
clip1 = process_video("video-1.mp4")
clip2 = process_video("video-2.mp4")
clip3 = process_video("video-3.mp4")

# Add a footer text
footerText = TextClip("This video made using MoviePy", fontsize=40, color='black', font='Arial').set_position(("center",0.8), relative=True).set_duration(duration)
footerText = footerText.fadein(2)

# Concatenate the videos
custom_padding = 2
videos = concatenate_videoclips([clip1.crossfadein(custom_padding),  clip2.crossfadein(custom_padding), clip3.crossfadein(custom_padding),], method="chain")

# Add the videos to the template
template = CompositeVideoClip([template, text, videos.set_position(("center", 0.2), relative=True), footerText])


# Step 4: Export the template
output_path = "output_template.mp4"
template.write_videofile(output_path, fps=30)
