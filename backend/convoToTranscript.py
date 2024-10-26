import assemblyai as aai

aai.settings.api_key = ""
transcriber = aai.Transcriber()

transcript = transcriber.transcribe("./demoVideo.mp4")

print(transcript.text) 