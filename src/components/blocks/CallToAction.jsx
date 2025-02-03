import React from 'react'
import Phones from '../../src/assets/Phones.png'

export default function CallToAction() {
  return (
    <Container>
        <div>
            <div className='w-1/2'>
                <div>
                    <h2 ></h2>
                    <p></p>
                </div>
                <div>
                    <div>
                        <div>

                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <Button invert={true}></Button>
                    <Link to="#"></Link>
                </div>
            </div>
            <div className='w-1/2'>
            <img src={Phones} alt="" /></div>
        </div>
    </Container>
  )
}
