import nltk
#from nltk.book import *
from nltk.corpus import PlaintextCorpusReader

import re
import numpy as np
import matplotlib.pyplot as plt

# Lexical Diversity:
def lexical_diversity(text):
    return len(text)/len(set(text))

print '----------------------------------------------------'
# Read in our text:
corpus_root = '/path/'

wordlists = PlaintextCorpusReader(corpus_root, '.*.txt')
print wordlists.fileids()
story = wordlists.words('text_0001.txt')
#story = wordlists.words('test.txt')
print 'text after PlaintextCorpusReader: ', type(story)
print len(story)
print story[0:90]
