import Api from "../api/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Pro, ProfessionalResponse } from '../interfaces/appInterfaces';
import axios from "axios";
import {loadProfessionals} from "../helpers/loadProfessionals";

