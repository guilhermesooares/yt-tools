import glob

files = glob.glob("/Users/guilherme.simoes/Documents/videos-mfk/utils/subtitles/*.txt")

for f in files:
  content = open(f).read()
  content = content.replace('\n', ' ').lower()
  print(content)