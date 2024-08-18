import assemblyai as aai

aai.settings.api_key = "a704c4c6727449e5bb4fba4d5d606551"
transcriber = aai.Transcriber()

transcript = transcriber.transcribe("./demoVideo.mp4")

print(transcript.text) 