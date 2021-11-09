from unidecode import unidecode
from nltk.corpus import stopwords
from nltk import RegexpTokenizer

from nltk.stem import RSLPStemmer
st = RSLPStemmer()

tokenizer = RegexpTokenizer(r'\w+')

def c(myDoc):
    cleanedDoc = []
    doc = normalize(myDoc.lower()) # remove acentuacao
    for word in tokenizer.tokenize(doc):
        cleanWord = clean(word.strip())
        if cleanWord and len(cleanWord) >= 4:
            cleanedDoc.append(cleanWord)
    return " ".join(cleanedDoc)[28:]

def normalize(word):
    return unidecode(word)

def remove_stopwords(word):
    myStops = ["ta", "ai", "ne", "ia", "entao", "nbsp", "voce", "gente", "pode", "porque", "aqui", "fazer", "assim", "acho", "tambem", "coisa"]
    stop = stopwords.words('portuguese') + myStops
    if word not in stop and not word.isdigit():
        return word
    
    return

def clean(word):
    word = st.stem(word) #Stemmer
    word = remove_stopwords(word)
    return word
