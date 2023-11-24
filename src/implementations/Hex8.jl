"""
"""
function element_stencil(::Hex8, ::Type{Itype}, ::Type{Ftype}) where {Itype <: Integer, Ftype <: AbstractFloat}
  # first one stupidly causes and allocation
  # @time nodal_coordinates = Ftype[
  #   -1.0  1.0  1.0 -1.0 -1.0  1.0 1.0 -1.0
  #   -1.0 -1.0  1.0  1.0 -1.0 -1.0 1.0  1.0
  #   -1.0 -1.0 -1.0  -1.0 1.0  1.0 1.0  1.0
  # ]
  nodal_coordinates = Matrix{Ftype}(undef, 3, 8)
  nodal_coordinates[1, 1] = -1.0
  nodal_coordinates[2, 1] = -1.0
  nodal_coordinates[3, 1] = -1.0
  #
  nodal_coordinates[1, 2] =  1.0
  nodal_coordinates[2, 2] = -1.0
  nodal_coordinates[3, 2] = -1.0
  #
  nodal_coordinates[1, 3] =  1.0
  nodal_coordinates[2, 3] =  1.0
  nodal_coordinates[3, 3] = -1.0
  #
  nodal_coordinates[1, 4] = -1.0
  nodal_coordinates[2, 4] =  1.0
  nodal_coordinates[3, 4] = -1.0
  #
  nodal_coordinates[1, 5] = -1.0
  nodal_coordinates[2, 5] = -1.0
  nodal_coordinates[3, 5] =  1.0
  #
  nodal_coordinates[1, 6] =  1.0
  nodal_coordinates[2, 6] = -1.0
  nodal_coordinates[3, 6] =  1.0
  #
  nodal_coordinates[1, 7] =  1.0
  nodal_coordinates[2, 7] =  1.0
  nodal_coordinates[3, 7] =  1.0
  #
  nodal_coordinates[1, 8] = -1.0
  nodal_coordinates[2, 8] =  1.0
  nodal_coordinates[3, 8] =  1.0
  #
  # first one stupidly cuases an allocation
  # @time face_nodes = Itype[
  #   1 2 3 1 1 5
  #   2 3 4 5 4 6
  #   6 7 8 8 3 7
  #   5 6 7 4 2 8
  # ]
  face_nodes = Matrix{Itype}(undef, 4, 6)
  face_nodes[1, 1] = 1
  face_nodes[2, 1] = 2
  face_nodes[3, 1] = 6
  face_nodes[4, 1] = 5
  #
  face_nodes[1, 2] = 2
  face_nodes[2, 2] = 3
  face_nodes[3, 2] = 7
  face_nodes[4, 2] = 6
  #
  face_nodes[1, 3] = 3
  face_nodes[2, 3] = 4
  face_nodes[3, 3] = 8
  face_nodes[4, 3] = 7
  #
  face_nodes[1, 4] = 1
  face_nodes[2, 4] = 5
  face_nodes[3, 4] = 8
  face_nodes[4, 4] = 4
  #
  face_nodes[1, 5] = 1
  face_nodes[2, 5] = 4
  face_nodes[3, 5] = 3
  face_nodes[4, 5] = 2
  #
  face_nodes[1, 6] = 5
  face_nodes[2, 6] = 6
  face_nodes[3, 6] = 7
  face_nodes[4, 6] = 8
  #
  interior_nodes = Vector{Itype}(undef, 0)
  return nodal_coordinates, face_nodes, interior_nodes
end

# using Hex8(1) as a template
for type in types_to_generate_interpolants(Hex8(1))
  # @eval function shape_function_values(::Hex8, ξ::$(type[2]))
    # @show type
  @eval function shape_function_values(
    e::Hex8, 
    ::Type{$(type[1])}, 
    ξ::A
  ) where A <: AbstractArray{<:Number, 1}

    # N = $(type[3])(
    N = $(type[1]){num_nodes(e), eltype(ξ)}(
      0.125 * (1.0 - ξ[1]) * (1.0 - ξ[2]) * (1.0 - ξ[3]),
      0.125 * (1.0 + ξ[1]) * (1.0 - ξ[2]) * (1.0 - ξ[3]),
      0.125 * (1.0 + ξ[1]) * (1.0 + ξ[2]) * (1.0 - ξ[3]),
      0.125 * (1.0 - ξ[1]) * (1.0 + ξ[2]) * (1.0 - ξ[3]),
      0.125 * (1.0 - ξ[1]) * (1.0 - ξ[2]) * (1.0 + ξ[3]),
      0.125 * (1.0 + ξ[1]) * (1.0 - ξ[2]) * (1.0 + ξ[3]),
      0.125 * (1.0 + ξ[1]) * (1.0 + ξ[2]) * (1.0 + ξ[3]),
      0.125 * (1.0 - ξ[1]) * (1.0 + ξ[2]) * (1.0 + ξ[3]),
    )
  end
end

"""
"""
function shape_function_gradients(::Hex8, ξ::SVector{3, <:Real})
# function shape_function_gradients(::Hex8, ξ::$(types[1]))
  ∇N_ξ = (@SMatrix [
  # ∇N_ξ = $(types[3])([
  # ∇N_ξ = ($(types[3]) [
  # ∇N_ξ = (@StaticMatrix SMatrix [
    -0.125 * (1.0 - ξ[2]) * (1.0 - ξ[3]) -0.125 * (1.0 - ξ[1]) * (1.0 - ξ[3]) -0.125 * (1.0 - ξ[1]) * (1.0 - ξ[2]);
    0.125 * (1.0 - ξ[2]) * (1.0 - ξ[3]) -0.125 * (1.0 + ξ[1]) * (1.0 - ξ[3]) -0.125 * (1.0 + ξ[1]) * (1.0 - ξ[2]);
    0.125 * (1.0 + ξ[2]) * (1.0 - ξ[3])  0.125 * (1.0 + ξ[1]) * (1.0 - ξ[3]) -0.125 * (1.0 + ξ[1]) * (1.0 + ξ[2]);
    -0.125 * (1.0 + ξ[2]) * (1.0 - ξ[3])  0.125 * (1.0 - ξ[1]) * (1.0 - ξ[3]) -0.125 * (1.0 - ξ[1]) * (1.0 + ξ[2]);
    -0.125 * (1.0 - ξ[2]) * (1.0 + ξ[3]) -0.125 * (1.0 - ξ[1]) * (1.0 + ξ[3])  0.125 * (1.0 - ξ[1]) * (1.0 - ξ[2]);
    0.125 * (1.0 - ξ[2]) * (1.0 + ξ[3]) -0.125 * (1.0 + ξ[1]) * (1.0 + ξ[3])  0.125 * (1.0 + ξ[1]) * (1.0 - ξ[2]);
    0.125 * (1.0 + ξ[2]) * (1.0 + ξ[3])  0.125 * (1.0 + ξ[1]) * (1.0 + ξ[3])  0.125 * (1.0 + ξ[1]) * (1.0 + ξ[2]);
    -0.125 * (1.0 + ξ[2]) * (1.0 + ξ[3])  0.125 * (1.0 - ξ[1]) * (1.0 + ξ[3])  0.125 * (1.0 - ξ[1]) * (1.0 + ξ[2]);
  ]) #|> SMatrix{8, 3, eltype(ξ), 24}
end

"""
"""
function shape_function_hessians(::Hex8, ξ::SVector{3, <:Real})
  ∇∇N_ξ = (@SArray [
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.;;
    #
     0.125 * (1. - ξ[3]);
    -0.125 * (1. - ξ[3]);
     0.125 * (1. - ξ[3]);
    -0.125 * (1. - ξ[3]);
     0.125 * (1. + ξ[3]);
    -0.125 * (1. + ξ[3]);
     0.125 * (1. + ξ[3]);
    -0.125 * (1. + ξ[3]);;
    #
     0.125 * (1.0 - ξ[2]);
    -0.125 * (1.0 - ξ[2]);
    -0.125 * (1.0 + ξ[2]);
     0.125 * (1.0 + ξ[2]);
    -0.125 * (1.0 - ξ[2]);
     0.125 * (1.0 - ξ[2]);
     0.125 * (1.0 + ξ[2]);
    -0.125 * (1.0 + ξ[2]);;;
    #
     0.125 * (1. - ξ[3]);
    -0.125 * (1. - ξ[3]);
     0.125 * (1. - ξ[3]);
    -0.125 * (1. - ξ[3]);
     0.125 * (1. + ξ[3]);
    -0.125 * (1. + ξ[3]);
     0.125 * (1. + ξ[3]);
    -0.125 * (1. + ξ[3]);;
    #
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.;;
    #
     0.125 * (1.0 - ξ[1]);
     0.125 * (1.0 + ξ[1]);
    -0.125 * (1.0 + ξ[1]);
    -0.125 * (1.0 - ξ[1]);
    -0.125 * (1.0 - ξ[1]);
    -0.125 * (1.0 + ξ[1]);
     0.125 * (1.0 + ξ[1]);
     0.125 * (1.0 - ξ[1]);;;
    #
     0.125 * (1.0 - ξ[2]);
    -0.125 * (1.0 - ξ[2]);
    -0.125 * (1.0 + ξ[2]);
     0.125 * (1.0 + ξ[2]);
    -0.125 * (1.0 - ξ[2]);
     0.125 * (1.0 - ξ[2]);
     0.125 * (1.0 + ξ[2]);
    -0.125 * (1.0 + ξ[2]);;
    #
     0.125 * (1.0 - ξ[1]);
     0.125 * (1.0 + ξ[1]);
    -0.125 * (1.0 + ξ[1]);
    -0.125 * (1.0 - ξ[1]);
    -0.125 * (1.0 - ξ[1]);
    -0.125 * (1.0 + ξ[1]);
     0.125 * (1.0 + ξ[1]);
     0.125 * (1.0 - ξ[1]);;
    #
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.; 
    0.;;;
  ]) |> SArray{Tuple{8, 3, 3}, eltype(ξ), 3, 72}
end
