import numpy as np
import timeit

from os import getpid
from multiprocessing import Process, Manager
from PyQt4 import QtGui, QtCore, uic
from PyQt4 import uic
from PyQt4.QtCore import *
from PyQt4.QtGui import *

from market1 import market1

qtCreatorFile = "/home/user_name/Software/MarketBots.ui"
Ui_MainWindow, QtBaseClass = uic.loadUiType(qtCreatorFile)



class MyApp(QtGui.QMainWindow, Ui_MainWindow):
    bot_slots_available = [True, True, True, True, True, True, True]
    num_bot_slots_available = 7
    bots = []

    market_slots_available = [True, True, True, True, True, True, True]
    num_market_slots_available = 7
    markets = []

    strategyTableFirstClick = [False, False, False, False, False, False, False]

    lastStrategyAvailableCellClicked = 0
    lastMarketSelected = 0

    # Connected States:
    connectedTomarket1 = False
    connectedTomarket2 = False
    connectedTomarket3 = False



def __init__(self):
        QtGui.QMainWindow.__init__(self)
        Ui_MainWindow.__init__(self)
        self.setupUi(self)
