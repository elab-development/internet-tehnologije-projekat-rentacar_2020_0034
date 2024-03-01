import { Box, Typography,  FormControl, FormHelperText, TextField, TextareaAutosize, Stack
, Select, MenuItem, Button} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";

//na formi ima dugme
import  CustomButton from './CustomButton'

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, 
  onFinishHandler, carImage} : FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#fff" fontFamily="Orbitron">
        {type} an car
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" sx={{backgroundImage: 'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")'}}>
          <form style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px',
          }}
          onSubmit={handleSubmit(onFinishHandler)}>
              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#fff', fontFamily: 'Orbitron'}}>Enter car name</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  style={{backgroundColor:"white", fontFamily:"Orbitron"}}
                  {...register('title', {required:true})}
                  />
              </FormControl>
              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#fff', fontFamily:"Orbitron"}}>Enter description</FormHelperText>
                  <TextareaAutosize
                    minRows={5}
                    required
                    placeholder="Write description"
                    color="info"
        
                    style={{width:'100%', background:'transparent', fontSize:'16px', backgroundColor:'#fff',
                  borderRadius:6, padding:10, color:'#919191', fontFamily:"Orbitron"}}
                  {...register('description', {required:true})}
                  />
              </FormControl>

              <Stack direction="row" gap={4}>
                  <FormControl sx={{flex:1}}>
                        <FormHelperText sx={{
                          fontWeight:500,
                          margin:'10px 0',
                          fontSize:16,
                          color:'#fff',
                          fontFamily:"Orbitron"
                        }}>
                              Select Car Type
                        </FormHelperText>
                        <Select
                          variant="outlined"
                          color="info"
                          style={{                          color:'#000',
                          fontFamily:"Orbitron", backgroundColor:"white"}}
                          displayEmpty
                          required
                          inputProps={{'aria-label' : 'Without label'}}
                          defaultValue="apartment"
                          {...register('carType', {required:true})}
                        >
                            <MenuItem value="Sport Cars">
                              Sport Cars
                            </MenuItem>
                            <MenuItem value="Sedans">
                              Sedans
                            </MenuItem>
                            <MenuItem value="Coupes">
                            Coupes
                            </MenuItem>
                            <MenuItem value="Electric Vehicles">
                            Electric Vehicles
                            </MenuItem>
                            <MenuItem value="Minivans">
                            Minivans
                            </MenuItem>
                            <MenuItem value="Limousines">
                            Limousines
                            </MenuItem>
                        </Select>
                  </FormControl>

                  <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16,color:'#fff',
                   fontFamily:"Orbitron"}}>Enter car price</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  type="number"
                  style={{backgroundColor:"white", fontFamily:"Orbitron"}}
                  {...register('price', {required:true})}
                  />
              </FormControl>
              </Stack>

              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16,                           color:'#fff',
                   fontFamily:"Orbitron"}}>Enter Location</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  style={{backgroundColor:"white", fontFamily:"Orbitron"}}
                  {...register('location', {required:true})}
                  />
              </FormControl>

              <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                        <Stack direction="row" gap={2}>
                            <Typography color='#fff' fontSize={16} fontWeight={500}
                            my="10px">Car Photo</Typography>
                            <Button component="label" sx={{ 
                              width: 'fit-content',                           color:'#fff',
                              fontFamily:"Orbitron", textTransform:'capitalize', fontSize: 16
                            }}>Upload
                              <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={(e)=> {
                                  // @ts-ignore
                                  handleImageChange(e.target.files[0])
                                }}
                              />
                            </Button>
                        </Stack>
                        <Typography fontSize={14} color="#808191" sx={{
                          wordBreak:'break-all'
                        }}>{carImage?.name}</Typography>
              </Stack>

              <CustomButton
                type="submit"
                title={formLoading ? 'Submitting...' : 'Submit'}
                backgroundColor="#8B0000"
                color="#fcfcfc"
              />
          </form>
      </Box>
    </Box>
  )
}

export default Form