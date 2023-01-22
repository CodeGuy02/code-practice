def generateGraphs(self):
        print('    ------ Generating Graphs --------------')
        if self.marketName == 'market001':
            plot_data = {}
            graphs_ohlc_data = self.market0001
            for currencyPair, chartData in graphs_ohlc_data.iteritems():
                #print('currencyPair to graph = ' + str(currencyPair))
                fig = plt.figure()

                
                fig.patch.set_facecolor('#000034')


                pltOHLC = fig.add_subplot(311) # Obtain subplot from fig

                pltOHLC.grid(True)
                pltOHLC.legend(bbox_to_anchor=(0., 1.02, 1., .102), loc=3, ncol=2, mode='expand', borderaxespad=0.)
                # new_market = str(goodVolume[1])
                new_market = str(currencyPair)
                new_ohlc = graphs_ohlc_data[new_market]

                #print('creating new plot for: ' + new_market)
                # ax = Axes.minorticks_on(Axes)
                if (self.days == '1 day') or (self.days == '2 days') or (self.days == '1 week'):
                    #print('_____using smaller bars...')
                    #candlestick_ohlc(pltOHLC, new_ohlc, width=0.0002, colorup='#baffc9', colordown='#ffb3ba')
                    candlestick_ohlc(pltOHLC, new_ohlc, width=0.0002, colorup='#aa2d7d', colordown='#611d6d')
                else:
                    print('_____using CHUNKY bars...')
                    candlestick_ohlc(pltOHLC, new_ohlc, width=0.2, colorup='#aa2d7d', colordown='#611d6d')

                for label in pltOHLC.xaxis.get_ticklabels():
                    label.set_rotation(0)

                # pltOHLC.xaxis.set_major_locator(mdates.DayLocator())
                pltOHLC.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
                # pltOHLC.set_xticks(ohlc[0][0], ohlc[(bar_count - 1)][0])

                #description = self.descriptionList[new_market]
                #pltOHLC.set_title(new_market + ' - ' + str(self.marketName) + ' - ' + str(description))
                pltOHLC.set_title(new_market + ' - ' + str(self.marketName))
                pltOHLC.set_xlabel('Date')
                pltOHLC.set_ylabel('Price')
