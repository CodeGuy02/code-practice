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

print '----------------------------------------------------'
sorted_text = sorted(set(story))
print 'text after PlaintextCorpusReader sorted:', type(sorted_text)
print len(sorted_text)
print sorted_text[0:90]
